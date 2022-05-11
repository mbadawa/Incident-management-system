package com.maxxpotential.incidientReport.report;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "report")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Report {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String reportDescription;
    private String reportLocation;
    private LocalDate reportDate;
    private boolean isUrgent;  // true if report is urgent
    private boolean isFixed;



}
