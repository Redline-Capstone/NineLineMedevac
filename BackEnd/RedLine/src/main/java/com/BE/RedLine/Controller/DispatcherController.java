package com.BE.RedLine.Controller;

import com.BE.RedLine.DAO.RequestRepo;
import com.BE.RedLine.DAO.ResponderRepo;
import com.BE.RedLine.Model.Request;
import com.BE.RedLine.Model.Responder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
//@RequestMapping("")
public class DispatcherController {
    final RequestRepo requestRepository;
    final ResponderRepo responderRepository;

    public DispatcherController(RequestRepo requestRepository,
                                ResponderRepo responderRepository) {
        this.requestRepository = requestRepository;
        this.responderRepository = responderRepository;
    }

    //get all
//    @GetMapping("/requests")
    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, path="/requests")
    public Iterable<Request> getall(){
        return requestRepository.findAll();
    }
    //get one
//    @GetMapping("/requests/{id}")
    @CrossOrigin
    @RequestMapping(method=RequestMethod.GET, path="/requests/{id}")
    public Optional<Request> getone(@PathVariable long id){
        return requestRepository.findById(id);
    }
    //patch one
//    @PatchMapping("/requests/{id}") //takes a key value pair for each paramater to change
    @CrossOrigin
    @RequestMapping(method=RequestMethod.PATCH, path= "/requests/{id}")
    public Request patch(@PathVariable long id, @RequestBody Map<String,String> input){
        Request request = requestRepository.findById(id).get();
        if(request == null){return null;}
        //for each key value pair
        for(String key : input.keySet()){
            //set the associated property
            switch (key.toLowerCase()){
                case "responder": request.setResponder(input.get(key)); break;
                    //request = this.jointables(input.get(key) ,request); break;
                case "completed": request.setCompleted(Boolean.parseBoolean((input.get(key)))); break;
                //updating the nineline
                case "line6" :
                case "security" : request.setSecurity(input.get(key)); break;
                case "line7" :
                case "hlzmarking" : request.setHlzMarking(input.get(key)); break;
                case "line8" :
                case "nationality" : request.setNationality(input.get(key)); break;
                case "line9" :
                case "nbc" : request.setNbc(input.get(key)); break;
            }
        }

        return requestRepository.save(request);
    }

//    //handler for setting responder to request
//    public Request jointables(String responder, Request request){
//        //look up responder
//        Optional<Responder> tempResponder = responderRepository.findByName(responder);
//        if(tempResponder == null){
//            return null;
//        }
//        //set responder to request
//        request.setResponder(tempResponder.get());
//        //save request //this happens in patch function
//        //return requestRepository.save(request);
//        return request;
//    }


}
