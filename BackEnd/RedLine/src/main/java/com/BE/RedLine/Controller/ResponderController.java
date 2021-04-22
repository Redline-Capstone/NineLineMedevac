package com.BE.RedLine.Controller;

import com.BE.RedLine.DAO.RequestRepo;
import com.BE.RedLine.DAO.ResponderRepo;
import com.BE.RedLine.Model.Request;
import com.BE.RedLine.Model.Responder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
//@RequestMapping("")
public class ResponderController {

    final RequestRepo requestRepository;

    final ResponderRepo responderRepository;

    public ResponderController(RequestRepo requestRepository,
                               ResponderRepo responderRepository)     {
        this.requestRepository = requestRepository;
        this.responderRepository = responderRepository;
    }



//    View Requests by responder
//    @GetMapping("/responder/{name}")
    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, path = "/responder/{name}")
    public Iterable<Request> getMyRequests(@PathVariable String name){
        return requestRepository.getRequestsByResponder(name);
//        return responderRepository.findByName(name).get().getRequestList();
    }

//get by id
    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, path = "/responder/{id}")
    public Optional<Responder> getMyRequests(@PathVariable Long id){
        //return requestRepository.getRequestsByResponder(name);
        return responderRepository.findById(id);
    }


//getall
    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, path = "/responder")
    public Iterable<Responder> getAllResponders(){
        return responderRepository.findAll();
    }


//create one
    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, path = "/responder")
    public Responder createOneResponder(@RequestBody Responder input){
        return responderRepository.save(input);
    }



}
