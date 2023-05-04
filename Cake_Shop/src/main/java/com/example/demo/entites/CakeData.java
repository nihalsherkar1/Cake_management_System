package com.example.demo.entites;

 

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="cake_data")
public class CakeData   {

	@Id
	 @Column(name="cake_id") 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String cake_id;
	
	@Column
	private String cake_name;
	@Column
	private String cake_category;
	@Column
	private String cake_weight;
	@Column
	private String price;
	
	 @JsonIgnore
	    @ManyToOne(fetch= FetchType.LAZY)
      private Login login;
	
	
	
	public Login getLogin() {
		return login;
	}



	public void setLogin(Login login) {
		this.login = login;
	}



	public CakeData(String cake_name, String cake_category, String cake_weight, String price, Login login) {
		super();
		this.cake_name = cake_name;
		this.cake_category = cake_category;
		this.cake_weight = cake_weight;
		this.price = price;
		this.login = login;
	}



	public CakeData() {
		super();
	}

	 

	public String getCake_id() {
		return cake_id;
	}

	public void setCake_id(String cake_id) {
		this.cake_id = cake_id;
	}

	public String getCake_name() {
		return cake_name;
	}

	public void setCake_name(String cake_name) {
		this.cake_name = cake_name;
	}

	public String getCake_category() {
		return cake_category;
	}

	public void setCake_category(String cake_category) {
		this.cake_category = cake_category;
	}

	public String getCake_weight() {
		return cake_weight;
	}

	public void setCake_weight(String cake_weight) {
		this.cake_weight = cake_weight;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}



	@Override
	public String toString() {
		return "CakeData [cake_id=" + cake_id + ", cake_name=" + cake_name + ", cake_category=" + cake_category
				+ ", cake_weight=" + cake_weight + ", price=" + price + ", login=" + login + "]";
	}

	 

	 
	 
	
	
	
	
	
}
