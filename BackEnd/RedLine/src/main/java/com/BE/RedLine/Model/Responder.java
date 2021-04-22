package com.BE.RedLine.Model;


import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name= "Responder")
public class Responder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; //table id
    private String name;

//    @OneToMany(mappedBy = "responder", fetch = FetchType.LAZY,
//            cascade = CascadeType.ALL)
//    @JsonManagedReference
//    private List<Request> requestList; //contains foreign keys

    @JsonCreator
    public Responder(long id, String name){//}, List<Request> requestList) {
        this.id = id;
        this.name = name;
//        this.requestList = requestList;
    }

    public Responder() {
    }

    @JsonGetter
    public long getId() {
        return id;
    }

    @JsonSetter
    public void setId(long id) {
        this.id = id;
    }

    @JsonGetter
    public String getName() {
        return name;
    }
    @JsonSetter
    public void setName(String name) {
        this.name = name;
    }

//    @JsonGetter
//    public List<Request> getRequestList() {
//        return requestList;
//    }
//    @JsonSetter
//    public void setRequestList(List<Request> requestList) {
//        this.requestList = requestList;
//    }

}
