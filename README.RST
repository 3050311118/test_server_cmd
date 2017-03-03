1.安装git
sudo apt-get install git

2.安装nginx
sudo apt-get install nginx  
默认网页目录 /usr/share/nginx/html  
默认配置文件修改内部子域名 /etc/nginx/sites-avaiable/default  
增加php执行支持

server{
        listen 80;
        server_name rest.mogudz.com;
        location / {
                proxy_pass http://127.0.0.1:9002;
        }
}
server{
        listen 80;
        server_name test.mogudz.com;
        index index.html;
        root /usr/share/nginx/html/test.mogudz.com;
        location ~ \.php$ {
        #       fastcgi_split_path_info ^(.+\.php)(/.+)$;
        #       # NOTE: You should have "cgi.fix_pathinfo = 0;" in php.ini
        #
        #       # With php5-cgi alone:
        #       fastcgi_pass 127.0.0.1:9000;
        #       # With php5-fpm:
                fastcgi_pass unix:/var/run/php5-fpm.sock;
                fastcgi_index index.php;
                include fastcgi_params;
        }
}

3.安装php   sudo apt-get install php5-fpm
sudo apt-get install php5-gd # Popular image manipulation library; used extensively by Wordpress and it's plugins.
sudo apt-get install php5-cli # Makes the php5 command available to the terminal for php5 scripting
sudo apt-get install php5-curl # Allows curl (file downloading tool) to be called from PHP5
sudo apt-get install php5-mcrypt # Provides encryption algorithms to PHP scripts
sudo apt-get install php5-mysql # Allows PHP5 scripts to talk to a MySQL Database
sudo apt-get install php5-readline # Allows PHP5 scripts to use the readline function
打开关闭php5进程
sudo service php5-fpm stop
sudo service php5-fpm start
sudo service php5-fpm restart
sudo service php5-fpm status

4.安装nodejs sudo apt-get install nodejs

5安装emqttd  
wget http://emqtt.com/downloads/2101/ubuntu14_04
unzip emqttd-ubuntu14.04-v2.1.0-beta.1.zip
# Start emqttd
./bin/emqttd start
# Check Status
./bin/emqttd_ctl status
# Stop emqttd
./bin/emqttd stop

Default Address	http://localhost:18083
Default User	admin
Default Password	public
    
6.安装redis 
$sudo apt-get update  
$sudo apt-get install redis-server  
$ redis-cli   
redis 127.0.0.1:6379> ping  
PONG  

7.安装mongodb
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1404-3.4.2.tgz    
tar -zxvf mongodb-linux-x86_64-ubuntu1404-3.4.2.tgz  

