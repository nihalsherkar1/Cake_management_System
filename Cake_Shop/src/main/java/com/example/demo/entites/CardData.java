package com.example.demo.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@CrossOrigin("http://localhost:3000")
public class CardData {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Long id;
	@Column(name="itemName")
	private String itemName;
	private String price;
	private String rating;
	
	public CardData() {
		super();
	}

	public CardData(String itemName, String price, String rating) {
		super();
		this.itemName = itemName;
		this.price = price;
		this.rating = rating;
	}

	 

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "CardData [id=" + id + ", itemName=" + itemName + ", price=" + price + ", rating=" + rating + "]";
	}
	
	
	
	
}
