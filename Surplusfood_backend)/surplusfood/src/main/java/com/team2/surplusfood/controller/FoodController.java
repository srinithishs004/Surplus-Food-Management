package com.team2.surplusfood.controller;


import com.team2.surplusfood.dto.FoodQualityDto;
import com.team2.surplusfood.dto.FoodStatusDto;
import com.team2.surplusfood.model.Food;
import com.team2.surplusfood.services.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:*")
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @GetMapping("/quality")
    public ResponseEntity<List<Food>> getQuality() {
        List<Food> foods = foodService.getQuality();
        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

    @GetMapping("/volunteer")
    public ResponseEntity<List<Food>> getAvailableFood() {
        List<Food> foods = foodService.getAvailableFood();
        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

    @GetMapping("/beneficiary")
    public ResponseEntity<List<Food>> getGoodFoods() {
        List<Food> foods = foodService.getGoodFoods();
        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

//    @GetMapping("/{foodid}")
//    public List<Food> getAllFood() {
//        return foodService.getAllFood();
//    }

    @PostMapping("/newfood")
//    public Food saveFood(@RequestBody Food food) {
//        return foodService.saveFood(food);
//    }
    public ResponseEntity<Food> saveFood(@RequestBody Food food){
        try{
            Food food1 =foodService.insert(food);
            HttpHeaders httpHeaders =new HttpHeaders();
            httpHeaders.add("food","/api/food/"+food1.getFoodid().toString());
            return new ResponseEntity<>(food1,httpHeaders,HttpStatus.CREATED);
        }catch (Exception ex){
            System.out.println(ex.toString());
            return null;
        }
    }

    @PatchMapping("/{foodId}/quality")
    public ResponseEntity<Food> updateFoodQuality(@PathVariable Long foodId, @RequestBody FoodQualityDto updateQualityDTO) {
        Optional<Food> updatedFood = foodService.updateFoodQuality(foodId, updateQualityDTO);
        if (updatedFood.isPresent()) {
            return ResponseEntity.ok(updatedFood.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{foodId}/status")
    public ResponseEntity<Food> updateFoodStatus(@PathVariable Long foodId, @RequestBody FoodStatusDto updateStatusDTO) {
        Optional<Food> updatedFood = foodService.updateFoodStatus(foodId, updateStatusDTO);
        if (updatedFood.isPresent()) {
            return ResponseEntity.ok(updatedFood.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
  // Additional CRUD endpoints if needed
}

