package com.example.demo.entites;

 

 
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="login")
public class Login  {
	@Id
	@Column(name="login_id") 
	String uid;
	
	@Column
	String pwd;
	
	@Column
	String user;
	
	
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="fk_uid")
//	private CakeData cakeData;
	
	 @JsonIgnore
	    @ManyToOne(fetch= FetchType.LAZY)
	    private Registration customer;
	
	 @OneToMany(targetEntity = CakeData.class,cascade = CascadeType.ALL,orphanRemoval = true)
//		@JoinColumn(name = "l_fk",referencedColumnName = "uid")
	private List<CakeData>cakeData; 
	 
	 
	 
	//Default Constructor 
	public Login() {
		super();
		 
	}



	public Login(String uid, String pwd, String user, Registration customer, List<CakeData> cakeData) {
		super();
		this.uid = uid;
		this.pwd = pwd;
		this.user = user;
		this.customer = customer;
		this.cakeData = cakeData;
	}



	public String getUid() {
		return uid;
	}



	public void setUid(String uid) {
		this.uid = uid;
	}



	public String getPwd() {
		return pwd;
	}



	public void setPwd(String pwd) {
		this.pwd = pwd;
	}



	public String getUser() {
		return user;
	}



	public void setUser(String user) {
		this.user = user;
	}



	public Registration getCustomer() {
		return customer;
	}



	public void setCustomer(Registration customer) {
		this.customer = customer;
	}



	public List<CakeData> getCakeData() {
		return cakeData;
	}



	public void setCakeData(List<CakeData> cakeData) {
		this.cakeData = cakeData;
	}



	@Override
	public String toString() {
		return "Login [uid=" + uid + ", pwd=" + pwd + ", user=" + user + ", customer=" + customer + ", cakeData="
				+ cakeData + "]";
	}







	 







	 



	 






 




	 
	
	 

	 
	 
	
	

}
