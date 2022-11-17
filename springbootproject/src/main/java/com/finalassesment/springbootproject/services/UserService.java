package com.finalassesment.springbootproject.services;

import com.finalassesment.springbootproject.models.User;
import com.finalassesment.springbootproject.repositories.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserJpaRepository repository;

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User findUserById(Long id) {
        return repository.findById(id).get();
    }

    public ResponseEntity<User> save(User user) {
        if (checkUser(user)) {
            return new ResponseEntity<>(repository.save(user), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    private boolean checkUser(User user) {
        return !user.getFirstName().isEmpty()
                && !user.getLastName().isEmpty() && !user.getPhoneNumber().isEmpty()
                && user.getEmail().length() > 0 && user.getEmail().toLowerCase().matches(
                "^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    }
}
