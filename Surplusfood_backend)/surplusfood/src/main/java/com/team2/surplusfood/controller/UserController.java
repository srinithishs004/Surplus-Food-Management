//package com.team2.surplusfood.controller;
//
//import com.team2.surplusfood.dto.LoginDto;
//import com.team2.surplusfood.dto.UserUpdateDto;
//import com.team2.surplusfood.model.User;
//import com.team2.surplusfood.repositories.UserRepository;
//import com.team2.surplusfood.services.UserService;
//import org.apache.logging.log4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import org.apache.logging.log4j.Logger;
//import org.apache.logging.log4j.LogManager;
//
//import javax.validation.Valid;
//import java.util.List;
//import java.util.Map;
//
//@CrossOrigin(origins = "http://localhost:*")
//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//    @Autowired
//    private UserService userService;
//
//    @GetMapping
//    public List<User> getAllUsers() {
//        return userService.getAllUsers();
//    }
//
//
//
//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody User user) {
//        try {
//            UserRepository.saveUser(user);
//            return ResponseEntity.ok().body("User registered successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Registration failed: " + e.getMessage());
//        }
//    }
//
//
//
//    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//    public User login(@RequestBody LoginDto user) {
//        User foundUser = userService.findByEmail(user.getUsername());
//        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
//            return foundUser;
//        }
//        return null;
//    }
//
//    @PutMapping("/{userId}")
//    public ResponseEntity<User> updateUser(@PathVariable("userId") Long userId, @RequestBody User user) {
//        userService.updateUser(userId, user);
//        return new ResponseEntity<>(userService.getUserById(userId), HttpStatus.OK);
//    }
//
//    @PatchMapping("/{userId}")
//    public ResponseEntity<User> updateUserPartial(@PathVariable("userId") Long userId, @RequestBody Map<String, Object> updates) {
//        User patchedUser = userService.patchUser(userId, updates);
//        if (patchedUser == null) {
//            return ResponseEntity.notFound().build();
//        }
//        return ResponseEntity.ok(patchedUser);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteUser(@PathVariable Long id) {
//        userService.deleteUser(id);
//    }
//}

package com.team2.surplusfood.controller;

import com.team2.surplusfood.model.User;
import com.team2.surplusfood.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if (userService.isUsernameTaken(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username is already taken.");
        }

        if (userService.isEmailTaken(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already registered.");
        }

        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully.");
    }

    @PostMapping("/login")
    public Object loginUser(@RequestBody User loginRequest) {
        Optional<User> user = userService.loginUser(loginRequest.getUsername(), loginRequest.getPassword());
        if (user.isPresent()) {
//            ResponseEntity.ok(Optional<User> user);
            return user;
        } else {
            return ResponseEntity.status(401).body("Invalid username or password.");
        }
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully.");
    }
}
