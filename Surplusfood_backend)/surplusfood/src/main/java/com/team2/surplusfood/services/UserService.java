//package com.team2.surplusfood.services;
//
//import com.team2.surplusfood.model.User;
//import com.team2.surplusfood.repositories.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Map;
//import java.util.Optional;
//
//@Service
//public class UserService {
//    @Autowired
//    private UserRepository userRepository;
//
////    @Autowired
////    private BCryptPasswordEncoder passwordEncoder;
//
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//
//    public User getUserById(Long userId) {
//        return userRepository.findById(userId).orElse(null);
//    }
//
//    public User saveUser(User user) {
//        return userRepository.save(user);
//    }
//
//    public void updateUser(Long id, User user) {
//        User userFromDb = userRepository.findById(id).orElse(null);
//        if (userFromDb != null) {
//            userFromDb.setUsername(user.getUsername());
//            userFromDb.setPassword(user.getPassword());
//            userFromDb.setPhone(user.getPhone());
//            userFromDb.setUserType(user.getUserType());
//            userFromDb.setEmail(user.getEmail());
//            userFromDb.setAddress(user.getAddress());
//            userFromDb.setFullName(user.getFullName());
//            userFromDb.setGender(user.getGender());
//            userRepository.save(userFromDb);
//        }
//    }
//
//    public User patchUser(Long id, Map<String, Object> updates) {
//        User user = userRepository.findById(id).orElse(null);
//        if (user != null) {
//            updates.forEach((key, value) -> {
//                switch (key) {
//                    case "username":
//                        user.setUsername((String) value);
//                        break;
//                    case "password":
//                        user.setPassword((String) value);
//                        break;
//                    case "phone":
//                        user.setPhone((Long) value);
//                        break;
//                    case "userType":
//                        user.setUserType((String) value);
//                        break;
//                    case "email":
//                        user.setEmail((String) value);
//                        break;
//                    case "address":
//                        user.setAddress((String) value);
//                        break;
//                    case "fullName":
//                        user.setFullName((String) value);
//                        break;
//                    case "gender":
//                        user.setGender((String) value);
//                        break;
//                    default:
//                        break;
//                }
//            });
//            userRepository.save(user);
//        }
//        return user;
//    }
//
//    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
//    }
//
//    public User findByEmail(String email) {
//        return userRepository.findByEmail(email).orElse(null);
//    }
//
//    public boolean checkLogin(String email, String password) {
//        User user = findByEmail(email);
//        return user != null && password.equals(user.getPassword());
//    }
//}

package com.team2.surplusfood.services;

import com.team2.surplusfood.model.User;
import com.team2.surplusfood.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> loginUser(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user;
        }
        return Optional.empty();
    }

    public boolean isUsernameTaken(String username) {
        return userRepository.findByUsername(username).isPresent();
    }

    public boolean isEmailTaken(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User updateUser(Long id, User userDetails) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setFullName(userDetails.getFullName());
            user.setPhone(userDetails.getPhone());
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            user.setEmail(userDetails.getEmail());
            user.setGender(userDetails.getGender());
            user.setUserType(userDetails.getUserType());
            user.setAddress(userDetails.getAddress());
            return userRepository.save(user);
        }
        return null;
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
