package com.vivek.soap.service;

import java.util.List;

import com.vivek.soap.dto.ArticleInfo;
import com.vivek.soap.entity.Article;

public interface IArticleService {
     List<ArticleInfo> getAllArticles();
     ArticleInfo getArticleById(long articleId);
     boolean addArticle(Article article);
     boolean updateArticle(Article article);
     boolean deleteArticle(long id);
}
