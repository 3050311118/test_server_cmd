# test_server_cmd  
1.安装git  
sudo apt-get install git    

2.安装nginx   
sudo apt-get install nginx    

默认网页目录  /usr/share/nginx/html    

默认配置文件修改内部子域名  /etc/nginx/sites-avaiable/default    

增加php执行支持

3.安装php  
sudo apt-get install php5-fpm  
sudo apt-get install php5-gd  # Popular image manipulation library; used extensively by Wordpress and it's plugins.  
sudo apt-get install php5-cli   # Makes the php5 command available to the terminal for php5 scripting  
sudo apt-get install php5-curl    # Allows curl (file downloading tool) to be called from PHP5  
sudo apt-get install php5-mcrypt   # Provides encryption algorithms to PHP scripts  
sudo apt-get install php5-mysql   # Allows PHP5 scripts to talk to a MySQL Database  
sudo apt-get install php5-readline  # Allows PHP5 scripts to use the readline function  
打开关闭php5进程  
sudo service php5-fpm stop  
sudo service php5-fpm start  
sudo service php5-fpm restart  
sudo service php5-fpm status  

4.安装nodejs
sudo apt-get install nodejs

5安装emqttd      
wget http://emqtt.com/downloads/2101/ubuntu14_04
