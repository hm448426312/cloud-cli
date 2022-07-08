FROM hub.cloud.huaxiacloud.com:5480/base-common/nginx:latest
COPY dist/ /usr/share/nginx/html/
