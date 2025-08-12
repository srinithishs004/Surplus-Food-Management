package com.team2.surplusfood.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.team2.surplusfood.model.User;
import lombok.Data;

@Data
public class UserUpdateDto {
    private String fullName;
    private Long phone;
    private String username;
    private String password;
    private String email;
    private String address;
    private String userType;
}