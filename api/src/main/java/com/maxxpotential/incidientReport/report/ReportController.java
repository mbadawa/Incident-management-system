package com.maxxpotential.incidientReport.report;


import org.springframework.web.bind.annotation.*;

import java.util.List;


// CORS


// Fixed the CORS issue
import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@RestController
@RequestMapping("/report")
@CrossOrigin(origins = "*")
public class ReportController {
    private ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }


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

    // getmapping that filters by the month LocalDate.now().getMonth().toString()
    @GetMapping("/month")
    public List<Report> getReportByMonth() {
        return reportService.getReportByMonth();
    }


    //  This Code and Below fixed the CORS issue
    @Component
    @Order(Ordered.HIGHEST_PRECEDENCE)
    public class ConfigCtrl implements Filter {
        @Override
        public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
            final HttpServletResponse response = (HttpServletResponse) res;
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
            response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
            response.setHeader("Access-Control-Max-Age", "3600");
            if ("OPTIONS".equalsIgnoreCase(((HttpServletRequest) req).getMethod())) {
                response.setStatus(HttpServletResponse.SC_OK);
            } else {
                chain.doFilter(req, res);
            }
        }
        @Override
        public void destroy() {
        }
        @Override
        public void init(FilterConfig config) throws ServletException {
        }
    }


}
