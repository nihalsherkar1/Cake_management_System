package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.CakeData;

@Repository
public interface CakeDataRepository extends JpaRepository<CakeData, String> {

	 

	 

	 

}
