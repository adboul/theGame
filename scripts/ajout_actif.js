db = connect("localhost:27017/theGame");
db.users.update({},{$set:{"actif":true}},{multi:true});
