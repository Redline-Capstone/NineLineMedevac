package com.BE.RedLine.Model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

//@Entity
@MappedSuperclass
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class NineLine {
    private String location; //line 1
    private String callSign; //line 2
    private String patientUrgency; //line 3
    private String specialEquipment; //line 4
    private String patientType; //line 5
    private String security; //line 6
    private String hlzMarking; //line 7
    private String nationality; //line 8
    private String nbc; //line9; //special

    public NineLine( //5line
             String location,
             String callSign,
             String patientUrgency,
             String specialEquipment,
             String patientType){

        this.location = location;
        this.callSign = callSign;
        this.patientUrgency = patientUrgency;
        this.specialEquipment = specialEquipment;
        this.patientType = patientType;
        this.security ="";
        this.hlzMarking ="";
        this.nationality="";
        this.nbc = ""; //line9; //special
    }
 }
