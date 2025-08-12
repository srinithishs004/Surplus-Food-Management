package com.team2.surplusfood.repositories;

import com.team2.surplusfood.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}
//
//    @Query(value = "SELECT * FROM users WHERE email = ?1", nativeQuery = true)
//    Optional<User> findByEmail(String Email);
//}
