package com.maxxpotential.incidientReport.report;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
@Service
public class ReportService {
    private ReportRepository reportRepository;

    public ReportService(ReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }



    public void createReport(@RequestBody List<Report> report) {
        if (report.size() > 0) {
            reportRepository.saveAll(report);
        }
        else {
            throw new RuntimeException("Please make sure all the fields are filled out!");
        }
    }

    public void updateReport(long id, Report report) {
        report.setId(id);
        reportRepository.save(report);
    }

    public void deleteReport(long id) {
        if (reportRepository.existsById(id)) {
            reportRepository.deleteById(id);
        }
        else {
            throw new RuntimeException("Report with the id of " + id + " does not exist!");
        }
    }

    public List<Report> getAllReports() {
        // checks if there are any reports in the database
        if (reportRepository.count() > 0) {
            return (List<Report>) reportRepository.findAll();
        }
        throw new RuntimeException("There are no reports in the database!");
    }

    public Report getReportById(long id) {
        if (reportRepository.existsById(id)) {
            return reportRepository.findById(id).get();
        }
        throw new RuntimeException("Report with the id of " + id + " does not exist!");
    }


    public List<Report> getReportByMonth() {
        return (List<Report>) reportRepository.findAll();
    }
}
