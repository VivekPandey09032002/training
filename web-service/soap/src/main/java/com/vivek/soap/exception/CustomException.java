package com.vivek.soap.exception;

import com.vivek.soap.dto.ServiceStatus;

import java.io.Serial;

public class CustomException extends  RuntimeException{
    @Serial
    private static final long serialVersionUID = 1L;
    private  ServiceStatus serviceStatus;

    public CustomException(String message, ServiceStatus serviceStatus) {
        super(message);
        this.serviceStatus = serviceStatus;
    }

    public CustomException(String message, Throwable e, ServiceStatus serviceStatus) {
        super(message, e);
        this.serviceStatus = serviceStatus;
    }

    public ServiceStatus getServiceStatus() {
        return serviceStatus;
    }

    public void setServiceStatus(ServiceStatus serviceStatus) {
        this.serviceStatus = serviceStatus;
    }
}
