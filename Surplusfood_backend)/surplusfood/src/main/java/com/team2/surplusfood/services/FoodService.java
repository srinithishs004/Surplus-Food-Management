package com.team2.surplusfood.services;

import com.team2.surplusfood.dto.FoodQualityDto;
import com.team2.surplusfood.dto.FoodStatusDto;
import com.team2.surplusfood.model.Food;
import com.team2.surplusfood.repositories.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;
    public List<Food> getQuality() {
        List<Food> foods = new ArrayList<>();
        foodRepository.findAll().forEach(foods::add);
//        System.out.println(foods);
        return foods;
    }

    public List<Food> getAvailableFood() {
        List<Food> foods = new ArrayList<>();
        foodRepository.findAll().forEach(foods::add);
//        System.out.println(foods);
        return foods;
    }
    public List<Food> getGoodFoods() {
        List<Food> foods = new ArrayList<>();
        foodRepository.findAll().forEach(foods::add);
//        System.out.println(foods);
        return foods;
    }

    public Food saveFood(Food food) {
        return foodRepository.save(food);
    }

    public Food insert(Food food) { return foodRepository.save(food);
    }


    public Optional<Food> updateFoodQuality(Long foodId, FoodQualityDto updateQualityDTO) {
        Optional<Food> optionalFood = foodRepository.findById(foodId);
        if (optionalFood.isPresent()) {
            Food food = optionalFood.get();
            food.setQuality(updateQualityDTO.getQuality());
            foodRepository.save(food);
            return Optional.of(food);
        }
        return Optional.empty();
    }

    public Optional<Food> updateFoodStatus(Long foodId, FoodStatusDto updateStatusDTO) {
        Optional<Food> optionalFood = foodRepository.findById(foodId);
        if (optionalFood.isPresent()) {
            Food food = optionalFood.get();
            food.setStatus(updateStatusDTO.getStatus());
            foodRepository.save(food);
            return Optional.of(food);
        }
        return Optional.empty();
    }
    // Additional CRUD methods if needed
}
