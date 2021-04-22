package com.BE.RedLine.Model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="Request")
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class Request extends NineLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private boolean completed = false;


//    @ManyToOne(fetch=FetchType.LAZY)//, cascade = CascadeType.ALL) //when you delete with cascade it also kills my spaceship
//    @JoinColumn(name="requestList")
//    @JsonBackReference
    private String responder = "";


    public Request( //5line
             String location,
             String callSign,
             String patientUrgency,
             String specialEquipment,
             String patientType){
        super(location, callSign, patientUrgency, specialEquipment, patientType);
    }
    public Request(NineLine input){ //with super class
        super(input.getLocation(),input.getCallSign(),input.getPatientUrgency(),input.getSpecialEquipment(),input.getPatientType(),input.getSecurity(),input.getHlzMarking(),input.getNationality(),input.getNbc());
    }

}
