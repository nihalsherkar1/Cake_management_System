package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entites.CardData;
 
import com.example.demo.repositories.CardDataRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("cake")
public class CardDataController {
	
	@Autowired
	private CardDataRepository cDataRepo;
	
	@PostMapping("/addcard")
	public CardData save(@RequestBody CardData cd) {
		CardData data=new CardData();
		System.out.println(cd);
		
		CardData addCard=cDataRepo.save(cd);
		
		if(addCard != null) {
			data.setId(data.getId());
			data.setItemName(data.getItemName());
			data.setPrice(data.getPrice());
			data.setRating(data.getRating());
			cDataRepo.save(data);
		}
		
		
		return addCard;
		}
	
	@GetMapping("/getallcake")
	public List<CardData> getAllItems() {

		return cDataRepo.findAll();

	}
	
	@GetMapping("/newcake/{Id}")
	public Optional<CardData> getStudentByID(@PathVariable("Id") Long  cakeid) {
		System.out.println(cakeid);
		return cDataRepo.findById(cakeid);
	}
	 

}
