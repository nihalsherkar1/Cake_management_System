package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.annotation.RequestScope;

import com.example.demo.entites.CakeData;
import com.example.demo.repositories.CakeDataRepository;
import com.example.demo.services.CakeDataServices;

@RestController
public class CakeDataController {

	@Autowired
	private CakeDataRepository crepo;
	
	@Autowired
	private CakeDataServices cservice;
	
	@GetMapping("/getcake")
	public CakeData getCakeData() {
		return new CakeData();
	}
	
	
	@PostMapping("/addcake")
	public CakeData addCake(@RequestBody CakeData cake) {
		System.out.println(cake);
		return crepo.save(cake);
	}
	
	
	@GetMapping("/cake/{cake_id}")
	public @RequestScope Optional<CakeData> getCakeById(@PathVariable String cake_id ) {
		return crepo.findById(cake_id);
	}
	
	@GetMapping("/getalldata")
	public List<CakeData>getAllCakeData(){
		return crepo.findAll();
	}
	
	 
	
}
