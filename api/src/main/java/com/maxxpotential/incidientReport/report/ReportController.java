package com.maxxpotential.incidientReport.report;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/report")

public class ReportController {
    private ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public List<Report> getAllReports() {
        return reportService.getAllReports();
    }
    @PostMapping("/create")
    public String createReport(@RequestBody List<Report> reports) {
        reportService.createReport(reports);
        return "Report created";
    }

//    Put Mapping by id
    @PutMapping("/{id}")
    public String updateReport(@PathVariable("id") long id, @RequestBody Report report) {
        reportService.updateReport(id, report);
        return "Report updated";
    }
    // Delete Mapping by id
    @DeleteMapping("/{id}")
    public String deleteReport(@PathVariable("id") long id) {
        reportService.deleteReport(id);
        return "Report deleted";
    }
    @GetMapping("/{id}")
    public Report getReportById(@PathVariable("id") long id) {
        return reportService.getReportById(id);
    }

}
