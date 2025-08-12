package com.team2.surplusfood.repositories;


import com.team2.surplusfood.model.Food;
import com.team2.surplusfood.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

    @Query(value = "SELECT * FROM foods WHERE quality = null", nativeQuery = true)
    List<Food> getAvailableFood();//volunteer


    @Query(value = "SELECT * FROM foods WHERE quality = good", nativeQuery = true)
    List<Food> getGoodFoods();//beneficiary

    @Query(value = "SELECT * FROM foods WHERE quality = notchecked", nativeQuery = true)
    List<Food> getQuality();//quality check
}
