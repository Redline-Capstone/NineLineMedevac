package com.BE.RedLine.DAO;

import com.BE.RedLine.Model.Responder;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ResponderRepo extends CrudRepository<Responder, Long> {
    Optional<Responder> findByName(String name) throws IllegalArgumentException;


}
