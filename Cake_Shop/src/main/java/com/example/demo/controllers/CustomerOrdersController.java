package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entites.CakeInfo;
import com.example.demo.entites.CustomerOrders;
import com.example.demo.services.CustomerOrdersService;


@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class CustomerOrdersController {
	
	@Autowired
	CustomerOrdersService csoservice;
	
	@GetMapping("/CustomerOrder")
	public List<CustomerOrders> getAll()
	{
		return csoservice.getAll();
	}
	
	@PostMapping("/placeorder/{customerId}/{cakeId}")
	public boolean save(@PathVariable("customerId") int customerId, @PathVariable("cakeId") int cakeId)
	{
		return csoservice.save(customerId, cakeId);
	}


}
