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
        reportRepository.saveAll(report);
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
      return (List<Report>) reportRepository.findAll();
    }

    public Report getReportById(long id) {
        if (reportRepository.existsById(id)) {
            return reportRepository.findById(id).get();
        }
        throw new RuntimeException("Report with the id of " + id + " does not exist!");
    }
}
