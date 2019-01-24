$(function(){
  firebase.database().ref("la-presentacion-el-paraiso/").child("posts").limitToFirst(1).on("value", snap => {
  	var data = snap.val()
  	snap.forEach(snapchild => {
  		var title = snapchild.val().Title
  		var img = snapchild.val().image
  		var content = snapchild.val().Content
  		var user = snapchild.val().user
  		var userImg = snapchild.val().userImg

  		var postHtml = `
  						<div class="col s6 trending-post">
						 <div class="card">
						    <div class="card-image waves-effect waves-block waves-light">
						      <img class="activator trending-post-img" src="${img}">
						    </div>
						    <div class="card-content">
						      <span class="card-title activator grey-text text-darken-4">${title}</span>
						      <p><a href="#">This is a link</a></p>
						    </div>
						    <div class="card-reveal">
						      <div class="poster-info">
						      	<img src="${userImg}" alt="${user}" class="circle"/>
								<span class="grey-text text-darken-4">${user}</span>
						      </div>						      
						      <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
						      <p>${content}</p>
						    </div>
						  </div>
						 </div>
  						`;

  	$(".trending").html(postHtml)

  	})
  })

  firebase.database().ref("la-presentacion-el-paraiso/").child("studentsList").limitToFirst(1).on("value", snap => {
  	var data = snap.val()
  	snap.forEach(snapchild => {
  		var likesCount = snapchild.val().likes.count
  		console.log(likesCount)

  		var likesHtml = `<div class="col s6">
	  						<div class="card">
					            <div class="card-content">
					              <span class="card-title">Conteo De Likes</span>
					              <h5 class="blue-text lighten-2-text">${likesCount}</h5>
					            </div>
					            <div class="card-action">
					              <a href="#">This is a link</a>
					            </div>
					          </div>
					     </div>
  						`;

  	$(".likes").html(likesHtml)

  	})
  })

})