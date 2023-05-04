package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entites.CakeData;
import com.example.demo.entites.CakeInfo;
import com.example.demo.entites.CustomerOrders;
import com.example.demo.entites.Login;
import com.example.demo.entites.Registration;
import com.example.demo.repositories.CakeDataRepository;
import com.example.demo.repositories.LoginRepo;

@Service
public class CakeDataServices {
	
	@Autowired
	private CakeDataRepository crepo;
	
	@Autowired
	private LoginRepo lrepo;

	 

	 

}
