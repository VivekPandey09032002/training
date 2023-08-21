package com.vivek.soap.service;

import java.util.ArrayList;
import java.util.List;

import com.vivek.soap.dto.ArticleInfo;
import com.vivek.soap.dto.ServiceStatus;
import com.vivek.soap.entity.RespStatus;
import com.vivek.soap.exception.CustomException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vivek.soap.entity.Article;
import com.vivek.soap.repository.ArticleRepository;

@Service
public class ArticleService implements IArticleService {
	@Autowired
	private ArticleRepository articleRepository;

	@Override
	public ArticleInfo getArticleById(long articleId) {

	 Article article = 	articleRepository.findById(articleId).orElseThrow(() ->{
		 ServiceStatus serviceStatus = new ServiceStatus();
		 serviceStatus.setStatusCode(RespStatus.FAIL.toString());
		 serviceStatus.setMessage("No article found with id " + articleId);
		 return new CustomException("ARTICLE NOT FOUND",serviceStatus);
	 });
	 ArticleInfo articleInfo = new ArticleInfo();
	 BeanUtils.copyProperties(article, articleInfo);
	 return articleInfo;
	}

	@Override
	public List<ArticleInfo> getAllArticles() {
		List<ArticleInfo> articleInfoList = new ArrayList<>();
		List<Article> articleList = articleRepository.findAll();
		for (Article article : articleList) {
			ArticleInfo ob = new ArticleInfo();
			BeanUtils.copyProperties(article, ob);
			articleInfoList.add(ob);
		}
		return articleInfoList;
	}

	@Override
	public  boolean addArticle(Article article) {
		List<Article> list = articleRepository.findByTitleAndCategory(article.getTitle(), article.getCategory());
		if (!list.isEmpty()) {
			return false;
		} else {
			articleRepository.save(article);
			return true;
		}
	}

	@Override
	public boolean updateArticle(Article article) {
		// no article found with given id
		if(articleRepository.findById(article.getArticleId()).isEmpty()){
			return false;
		}
		articleRepository.save(article);
		return  true;
	}

	@Override
	public boolean deleteArticle(long id) {
		// no article found with given id
		if(articleRepository.findById(id).isEmpty()){
			return false;
		}
		articleRepository.delete(articleRepository.findById(id).get());
		return true;
	}
}
