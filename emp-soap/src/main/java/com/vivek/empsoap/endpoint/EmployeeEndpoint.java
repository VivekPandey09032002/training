package com.vivek.empsoap.endpoint;

import com.vivek.employee.CreateRequest;
import com.vivek.employee.Employee;
import com.vivek.employee.Responses;
import com.vivek.employee.ShowEmployeeDetailsResponse;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class EmployeeEndpoint {
    private static final String NAMESPACE_URI = "http://vivek.com/employee";

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "CreateRequest")
    @ResponsePayload
    public Responses addEmployee(@RequestPayload CreateRequest request) {
        Responses response = new Responses();
        ShowEmployeeDetailsResponse showEmployeeDetailsResponse = new ShowEmployeeDetailsResponse();
        showEmployeeDetailsResponse.setEmployee(new Employee());
        showEmployeeDetailsResponse.setMessage("employee");
        showEmployeeDetailsResponse.setSuccess(true);
        response.setShowEmployeeDetailsResponse(showEmployeeDetailsResponse);

        return response;
    }
}
