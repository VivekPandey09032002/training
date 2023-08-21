package com.vivek.soap.endpoints;

import java.util.ArrayList;
import java.util.List;

import com.vivek.soap.dto.*;
import com.vivek.soap.entity.Article;
import com.vivek.soap.entity.RespStatus;
import com.vivek.soap.service.IArticleService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;


@Endpoint
@Log4j2
public class ArticleEndpoint {
	private static final String NAMESPACE_URI = "http://www.vivek.com/article-ws";
	@Autowired
	private IArticleService articleService;

	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "getArticleByIdRequest")
	@ResponsePayload
	public GetArticleByIdResponse getArticle(@RequestPayload GetArticleByIdRequest request) {
		log.info("Getting article with id: {}",request.getArticleId());
		ArticleInfo articleInfo =  articleService.getArticleById(request.getArticleId());
		GetArticleByIdResponse getArticleByIdResponse = new GetArticleByIdResponse();
		getArticleByIdResponse.setArticleInfo(articleInfo);
		return  getArticleByIdResponse;
	}
	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "getAllArticlesRequest")
	@ResponsePayload
	public GetAllArticlesResponse getAllArticles() {
		log.info("Getting all the articles");
		List<ArticleInfo> articleInfoList = articleService.getAllArticles();
		GetAllArticlesResponse getAllArticlesResponse = new GetAllArticlesResponse();
		getAllArticlesResponse.getArticleInfo().addAll(articleInfoList);
		log.warn("Total article found: {}",getAllArticlesResponse.getArticleInfo().size());
		return getAllArticlesResponse;
	}	
	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "addArticleRequest")
	@ResponsePayload
	public AddArticleResponse addArticle(@RequestPayload AddArticleRequest request) {
		log.info("calling add article");
		AddArticleResponse response = new AddArticleResponse();		
    	ServiceStatus serviceStatus = new ServiceStatus();		
		Article article = new Article();
		article.setTitle(request.getTitle());
		article.setCategory(request.getCategory());		
        boolean flag = articleService.addArticle(article);
        if (!flag) {
			log.warn("Same article found!!! title : {}, category: {}",request.getTitle(),request.getCategory());
        	serviceStatus.setStatusCode(RespStatus.CONFLICT.toString());
        	serviceStatus.setMessage("Content Already Available");
        	response.setServiceStatus(serviceStatus);
        } else {
			ArticleInfo articleInfo = new ArticleInfo();
	        BeanUtils.copyProperties(article, articleInfo);
			response.setArticleInfo(articleInfo);
        	serviceStatus.setStatusCode(RespStatus.SUCCESS.toString());
        	serviceStatus.setMessage("Content Added Successfully");
        	response.setServiceStatus(serviceStatus);
			log.info("Saved the article");
        }

        return response;
	}
	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "updateArticleRequest")
	@ResponsePayload
	public UpdateArticleResponse updateArticle(@RequestPayload UpdateArticleRequest request) {
		Article article = new Article();
		BeanUtils.copyProperties(request.getArticleInfo(), article);
		boolean flag = articleService.updateArticle(article);
    	ServiceStatus serviceStatus = new ServiceStatus();
		if(flag) {
			log.info("updated the article");
			serviceStatus.setStatusCode(RespStatus.SUCCESS.toString());
			serviceStatus.setMessage("Content Updated Successfully");
		}else{
			log.warn("Cannot find article with id: {}",article.getArticleId());
			serviceStatus.setStatusCode(RespStatus.FAIL.toString());
			serviceStatus.setMessage("No Article found to update");
		}
    	UpdateArticleResponse response = new UpdateArticleResponse();
    	response.setServiceStatus(serviceStatus);
    	return response;
	}
	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "deleteArticleRequest")
	@ResponsePayload
	public DeleteArticleResponse deleteArticle(@RequestPayload DeleteArticleRequest request) {
		boolean flag = articleService.deleteArticle(request.getArticleId());
    	ServiceStatus serviceStatus = new ServiceStatus();
		if (!flag) {
			log.warn("Cannot find article with id: {}",request.getArticleId());
	    	serviceStatus.setStatusCode(RespStatus.FAIL.toString());
	    	serviceStatus.setMessage("Content Not Available");
		} else {
			log.info("deleted the article");
	    	serviceStatus.setStatusCode(RespStatus.SUCCESS.toString());
	    	serviceStatus.setMessage("Content Deleted Successfully");
		}
    	DeleteArticleResponse response = new DeleteArticleResponse();
    	response.setServiceStatus(serviceStatus);
		return response;
	}	
}
