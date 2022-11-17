package com.finalassesment.springbootproject.controllers;

import com.finalassesment.springbootproject.models.User;
import com.finalassesment.springbootproject.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService service;

    @GetMapping(path = "/get_all")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping(path = "/{id}")
    public User getUser(@PathVariable Long id) {
        return service.findUserById(id);
    }

    @PostMapping()
    public ResponseEntity<User> create(@RequestBody User user) {
        return service.save(user);
    }

    @PutMapping()
    public ResponseEntity<User> update(@RequestBody User user) {
        User userInDb = service.findUserById(user.getId());
        if (!userInDb.toString().equals(user.toString())) {
            return service.save(user);
        } else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}
