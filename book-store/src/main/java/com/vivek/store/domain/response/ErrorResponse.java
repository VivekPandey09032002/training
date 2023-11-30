package com.vivek.store.domain.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.servlet.http.HttpServletRequest;
import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse {
    @Builder.Default
    LocalDateTime timestamp = LocalDateTime.now();
    @Builder.Default
    String path = getCurrentPath();
    String message;
    // only show when validation error
    @JsonInclude(JsonInclude.Include.NON_NULL)
    List<String> errors;

    @Builder.Default
    HttpStatus status = HttpStatus.BAD_REQUEST;

    public static String getCurrentPath() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        return request.getRequestURI();
    }
}
