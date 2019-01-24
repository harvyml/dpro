firebase.auth().onAuthStateChanged( user => {
	if(user){
		$(".export-profile-to-excel").on("click", exportProfileToExcel)
		$(".export-grades-1").on("click", exportGrades_1)
		$(".export-grades-1").on("click", function(){				
			setTimeout(function(){
				window.location.href = "toPdf.html"
			}, 100)		
		})

		// LLamada a datos de estudiantes
		showAndEdit()
		$(".switch-edit").click(function(){
			$("table tbody").html("")
			$(".to-edit").html("")
			showAndEdit()
		})


		function showAndEdit(){
			$("#modal-profile .table-notas-1").html("")
			firebase.database().ref("la-presentacion-el-paraiso").child("users").once("value", snap => {
				//$("#tbody-students-info").html("")
				//$("#tbody-teachers-info").html("")
				//$("#tbody-admin-info").html("")
				$("#modal-profile .table-notas-1").html("")
				var data = snap.val()
				var keys = Object.keys(data)
				for(var i = 0; i < keys.length; i++){
					var k = keys[i]
					if(data[k].info.rol == "student"){
							if($("#switch-edit-students").attr("href") == "checked"){
								$(".th-export-to-excel").hide()
								$(".table-to-edit").show()
								$(".students-table th:last").show()
								let html_to_upload = `
																		<tr class="${k}-con-data-to-edit con-data-to-edit" style="display:flex; margin: 30px 0px;">
																			<td class="td-input-field">
																			<input value="${data[k].info.name}" id="${k}-input-name"/>
																			<span class="span-hidden" style="display: none;">${data[k].info.name}</span>
																			</td>
																			<td class="td-input-field">
																			<input value="${data[k].info.group}" id="${k}-input-group"/>
																			<span class="span-hidden" style="display: none;">${data[k].info.group}</span>
																			</td>
																			<td class="td-input-field">
																			<input value="${data[k].info.id}" id="${k}-input-id"/>
																			<span class="span-hidden" style="display: none;">${data[k].info.id}</span>
																			</td>
																			<td class="td-input-field">
																			<input value="${data[k].info.email}" id="${k}-input-email"/>
																			<span class="span-hidden" style="display: none;">${data[k].info.email}</span>
																			</td>
																			<td class="td-input-field">
																			<input value="${data[k].info.phoneNumber}" id="${k}-input-phoneNumber"/>
																			<span class="span-hidden" style="display: none;">${data[k].info.phoneNumber}</span>
																			</td>
																			<td class="td-input-field">
																			<input value="${data[k].info.code}" id="${k}-input-code"/>
																			<span class="span-hidden" style="display: none;">${data[k].info.code}</span>
																			</td>
																			<td class="td-input-field">
																			<input value="${data[k].info.rol}" id="${k}-input-rol"/>
																			<span class="span-hidden" style="display: none;">${data[k].info.rol}</span>
																			</td>
																			<td><button href="${k}" class="noExl btn hoverable waves trigger-edit ${k}-to-trigger">Enviar</button></td>
																			</tr>
																			`

																			$(".to-edit-students").append(html_to_upload)
							}else{
																			console.log(data[k].info.name, k)
																			var student_html = `<tr>
																														<td>${data[k].info.name}</td>
																														<td >${data[k].info.group}</td>
																														<td>${data[k].info.id}</td>
																														<td>${data[k].info.email}</td>
																														<td>${data[k].info.phoneNumber}</td>
																														<td>${data[k].info.code}</td>
																														<td>${data[k].info.rol}</td>
																														<td><button href="${k}" class="noExl btn hoverable waves go-to-profile modal-trigger noExl circle" href="#modal-profile"><i class="material-icons">add</i></button></td>
																													</tr>`

																													$("#tbody-students-info").append(student_html)
																													$(".students-table th:last").hide()
																													$(".th-export-to-excel").show()
							}

					}else if(data[k].info.rol == "teacher"){
						if($("#switch-edit-teachers").attr("href") == "checked"){
							$(".th-export-to-excel").hide()
							$(".table-to-edit").show()
							$(".teachers-table th:last").show()
							let html_to_upload = `
																	<tr class="${k}-con-data-to-edit con-data-to-edit" style="display:flex; margin: 30px 0px;">
																		<td class="td-input-field">
																		<input value="${data[k].info.name}" id="${k}-input-name"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.name}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.group}" id="${k}-input-group"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.group}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.id}" id="${k}-input-id"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.id}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.email}" id="${k}-input-email"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.email}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.phoneNumber}" id="${k}-input-phoneNumber"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.phoneNumber}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.code}" id="${k}-input-code"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.code}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.rol}" id="${k}-input-rol"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.rol}</span>
																		</td>
																		<td><button href="${k}" class="noExl btn hoverable waves trigger-edit ${k}-to-trigger">Enviar</button></td>
																		</tr>
																		`

																		$(".to-edit-teachers").append(html_to_upload)
						}else{
																		console.log(data[k].info.name, k)
																		var teacher_html = `<tr>
																													<td>${data[k].info.name}</td>
																													<td>${data[k].info.group}</td>
																													<td>${data[k].info.id}</td>
																													<td>${data[k].info.email}</td>
																													<td>${data[k].info.phoneNumber}</td>
																													<td>${data[k].info.code}</td>
																													<td>${data[k].info.rol}</td>
																													<td><button href="${k}" class="noExl btn hoverable waves go-to-profile">Perfil</button></td>
																												</tr>`

																												$("#tbody-teachers-info").append(teacher_html)
																												$(".teachers-table th:last").hide()
																												$(".th-export-to-excel").show()
						}
						/*console.log(data[k].info.name)
						var teacher_html = `<tr>
																	<td>${data[k].info.name}</td>
																	<td>${data[k].info.group}</td>
																	<td>${data[k].info.id}</td>
																	<td>${data[k].info.email}</td>
																	<td>${data[k].info.phoneNumber}</td>
																	<td><button href="${k}" class="noExl btn hoverable waves trigger-edit">Editar</button></td>
																</tr>`

						$("#tbody-teachers-info").append(teacher_html)*/

					}else if(data[k].info.rol == "admin"){
						if($("#switch-edit-admin").attr("href") == "checked"){
							$(".th-export-to-excel").hide()
							$(".table-to-edit").show()
							$(".admin-table th:last").show()
							let html_to_upload = `
																	<tr class="${k}-con-data-to-edit con-data-to-edit" style="display:flex; margin: 30px 0px;">
																		<td class="td-input-field">
																		<input value="${data[k].info.name}" id="${k}-input-name"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.name}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.group}" id="${k}-input-group"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.group}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.id}" id="${k}-input-id"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.id}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.email}" id="${k}-input-email"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.email}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.phoneNumber}" id="${k}-input-phoneNumber"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.phoneNumber}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.code}" id="${k}-input-code"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.code}</span>
																		</td>
																		<td class="td-input-field">
																		<input value="${data[k].info.rol}" id="${k}-input-rol"/>
																		<span class="span-hidden" style="display: none;">${data[k].info.rol}</span>
																		</td>
																		<td><button href="${k}" class="noExl btn hoverable waves trigger-edit ${k}-to-trigger">Enviar</button></td>
																		</tr>
																		`

																		$(".to-edit-admin").append(html_to_upload)
						}else{
																		console.log(data[k].info.name, k)
																		var admin_html = `<tr>
																													<td>${data[k].info.name}</td>
																													<td>${data[k].info.group}</td>
																													<td>${data[k].info.id}</td>
																													<td>${data[k].info.email}</td>
																													<td>${data[k].info.phoneNumber}</td>
																													<td>${data[k].info.code}</td>
																													<td>${data[k].info.rol}</td>
																													<td><button href="${k}" class="noExl btn hoverable waves go-to-profile">Perfil</button></td>
																												</tr>`

																												$("#tbody-admin-info").append(admin_html)
																												$(".admin-table th:last").hide()
																												$(".th-export-to-excel").show()
						}
						/*var admin_html = `<tr>
												<td>${data[k].info.name}</td>
												<td>${data[k].info.group}</td>
												<td>${data[k].info.id}</td>
												<td>${data[k].info.email}</td>
												<td>${data[k].info.phoneNumber}</td>
												<td><button href="${k}" class="noExl btn hoverable waves trigger-edit">Editar</button></td>
											</tr>`

						$("#tbody-admin-info").append(admin_html)*/
					}
			}//FOR LOOP FINISHES
			$(".trigger-edit").click(function(){
			  //PREVIoUS CODE
			  var previousCode = $(this).attr("href")
			  //UPDATE DATA
			  var nameToUpdate = $(`#${previousCode}-input-name`).val()
			  var groupToUpdate = $(`#${previousCode}-input-group`).val()
			  var idToUpdate = $(`#${previousCode}-input-id`).val()
			  var emailToUpdate = $(`#${previousCode}-input-email`).val()
			  var phoneToUpdate = $(`#${previousCode}-input-phoneNumber`).val()
			  var codeToUpdate = $(`#${previousCode}-input-code`).val()
			  var rolToUpdate = $(`#${previousCode}-input-rol`).val()

			  console.log(previousCode)
				firebase.database().ref(`la-presentacion-el-paraiso/users/${previousCode}/info`).update({
					name: nameToUpdate,
					group: groupToUpdate,
					id: idToUpdate,
					email: emailToUpdate,
					phoneNumber: phoneToUpdate,
					code: codeToUpdate,
					rol: rolToUpdate
				}).then(() => Materialize.toast("Actualizado", 3000, "300"))

			})
				$(".go-to-profile").click(function(href){
					var href = $(this).attr("href")
					goToProfile(href)
					$("#modal-profile").modal("open")
					localStorage.removeItem("k")
					localStorage.setItem("k", href);
					console.log(localStorage.getItem("k"))
				})

		})
		}
		}else{
			Materialize.toast("Not Logged In", 3000, "red")
			window.location.href = "./index.html"
		}
})

	function goToProfile(href){
		$(".table-notas").html("")
		$("#profile-obs-1").html("")
		$("#profile-obs-2").html("")
		$("#profile-obs-3").html("")
		firebase.database().ref(`la-presentacion-el-paraiso/users/${href}/`).once("value", snap => {
		//--------------
		var data = snap.val()
		console.log(snap.val())
		var allsubjects = Object.keys(snap.val().grades)
						allsubjects.forEach(function(element){
							console.log(element)
							//TODO: make the profitValues for each school and change the percentage values below
							//---------------------------
							var nota_1_1 = parseFloat(data.grades[element].nupp)
							var nota_2_1 = parseFloat(data.grades[element].ndpp)
							var nota_3_1 = parseFloat(data.grades[element].ntpp)
							var nota_4_1 = parseFloat(data.grades[element].ncpp)
							var nota_5_1 = parseFloat(data.grades[element].ncipp)
							var nota_6_1 = parseFloat(data.grades[element].nsepp)
							var nota_7_1 = parseFloat(data.grades[element].nsipp)
							var nota_8_1 = parseFloat(data.grades[element].nopp)
							var nota_auto_1 = parseFloat(data.grades[element].auto_1)
							var nota_coe_1 = parseFloat(data.grades[element].coe_1)
							//var obs_1 = data.grades[element].observation_1.observation
							//var obs_date_1 = data.grades[element].observation_1.date
							//var obs_teacher_1 = data.grades[element].observation_1.teacher
							var profit_compromiso_en_clase_1 = (nota_1_1 + nota_2_1) / 2 * 15 / 100;
							var profit_evaluacion_final_1 = (nota_3_1) /1 * 20 / 100;
							var profit_evaluaciones_1 = (nota_4_1 + nota_5_1) /2 * 30 / 100;
							var profit_trabajo_personal_1 = (nota_6_1 + nota_7_1 + nota_8_1 )/3 * 30 / 100;
							var profit_auto_coe_1 = (nota_auto_1 + nota_coe_1) / 2 * 5 / 100;

							console.log(profit_compromiso_en_clase_1, profit_evaluacion_final_1, profit_evaluaciones_1, profit_trabajo_personal_1)
							var profit_1 = parseFloat(profit_compromiso_en_clase_1 + profit_evaluacion_final_1 + profit_evaluaciones_1 + profit_trabajo_personal_1 + profit_auto_coe_1).toFixed(2)

							//Second period
							var nota_1_2 = parseFloat(data.grades[element].nusp)
							var nota_2_2 = parseFloat(data.grades[element].ndsp)
							var nota_3_2 = parseFloat(data.grades[element].ntsp)
							var nota_4_2 = parseFloat(data.grades[element].ncsp)
							var nota_5_2 = parseFloat(data.grades[element].ncisp)
							var nota_6_2 = parseFloat(data.grades[element].nsesp)
							var nota_7_2 = parseFloat(data.grades[element].nsisp)
							var nota_8_2 = parseFloat(data.grades[element].nosp)
							var nota_auto_2 = parseFloat(data.grades[element].auto_2)
							var nota_coe_2 = parseFloat(data.grades[element].coe_2)
							//var obs_2 = data.grades[element].observation_2.observation
							//var obs_date_2 = data.grades[element].observation_2.date
							//var obs_teacher_2 = data.grades[element].observation_2.teacher
							var profit_compromiso_en_clase_2 = (nota_1_2 + nota_2_2) / 2 * 15 / 100;
							var profit_evaluacion_final_2 = (nota_3_2) /1 * 20 / 100;
							var profit_evaluaciones_2 = (nota_4_2 + nota_5_2) /2 * 30 / 100;
							var profit_trabajo_personal_2 = (nota_6_2 + nota_7_2 + nota_8_2 )/3 * 30 / 100;
							var profit_auto_coe_2 = (nota_auto_2 + nota_coe_2) / 2 *5 / 100;

							console.log(profit_compromiso_en_clase_2, profit_evaluacion_final_2, profit_evaluaciones_2, profit_trabajo_personal_2)
							var profit_2 = parseFloat(profit_compromiso_en_clase_2 + profit_evaluacion_final_2 + profit_evaluaciones_2 + profit_trabajo_personal_2 + profit_auto_coe_2).toFixed(2)

							//Third Period
							var nota_1_3 = parseFloat(data.grades[element].nutp)
							var nota_2_3 = parseFloat(data.grades[element].ndtp)
							var nota_3_3 = parseFloat(data.grades[element].nttp)
							var nota_4_3 = parseFloat(data.grades[element].nctp)
							var nota_5_3 = parseFloat(data.grades[element].ncitp)
							var nota_6_3 = parseFloat(data.grades[element].nsetp)
							var nota_7_3 = parseFloat(data.grades[element].nsitp)
							var nota_8_3 = parseFloat(data.grades[element].notp)
							var nota_auto_3 = parseFloat(data.grades[element].auto_3)
							var nota_coe_3 = parseFloat(data.grades[element].coe_3)
							//var obs_3 = data.grades[element].observation_3.observation
							//var obs_date_3 = data.grades[element].observation_3.date
							//var obs_teacher_3 = data.grades[element].observation_3.teacher
							var profit_compromiso_en_clase_3 = (nota_1_3 + nota_2_3) / 2 * 15 / 100;
							var profit_evaluacion_final_3 = (nota_3_3) /1 * 20 / 100;
							var profit_evaluaciones_3 = (nota_4_3 + nota_5_3) /2 * 30 / 100;
							var profit_trabajo_personal_3 = (nota_6_3 + nota_7_3 + nota_8_3)/3 * 30 / 100;
							var profit_auto_coe_3 = (nota_auto_3 + nota_coe_3) / 2 *5 / 100;

							console.log(profit_compromiso_en_clase_3, profit_evaluacion_final_3, profit_evaluaciones_3, profit_trabajo_personal_3)
							var profit_3 = parseFloat(profit_compromiso_en_clase_3 + profit_evaluacion_final_3 + profit_evaluaciones_3 + profit_trabajo_personal_3 + profit_auto_coe_3).toFixed(2)
							//-----------------------------------------------------------------------------
							var grades_1 = `

															<tr>
																	<td>${element}</td>
																	<td>${nota_1_3} | ${nota_2_3}</td>
																	<td>${nota_3_3}</td>
																	<td>${nota_4_3} | ${nota_5_3} | ${nota_6_3}</td>
																	<td>${nota_7_3} | ${nota_8_3}</td>
																	<td>${nota_auto_3} | ${nota_coe_3}</td>
																	<td>${profit_3}</td>
															</tr>

															`
						var grades_2 = `
															<tr>
																	<td>${element}</td>
																	<td>${nota_1_2} | ${nota_2_2}</td>
																	<td>${nota_3_2}</td>
																	<td>${nota_4_2} | ${nota_5_2} | ${nota_6_2}</td>
																	<td>${nota_7_2} | ${nota_8_2}</td>
																	<td>${nota_auto_2} | ${nota_coe_2}</td>
																	<td>${profit_2}</td>
															</tr>
														 `
						var grades_3 = `
															<tr>
																	<td>${element}</td>
																	<td>${nota_1_3} | ${nota_2_3}</td>
																	<td>${nota_3_3}</td>
																	<td>${nota_4_3} | ${nota_5_3} | ${nota_6_3}</td>
																	<td>${nota_7_3} | ${nota_8_3}</td>
																	<td>${nota_auto_3} | ${nota_coe_3}</td>
																	<td>${profit_3}</td>
															</tr>
														 `

						$(".table-notas-1").append(grades_1)
						//$(".table-observations-1").append(observations_1)
						$(".table-notas-2").append(grades_2)
						//$(".table-observations-2").append(observations_2)
						$(".table-notas-3").append(grades_3)
						//$(".table-observations-3").append(observations_3)




						//--------------------Likes-------------------------
						})
		//--------------
		console.log(href)	
		$("#profile-obs-1").html("")
		$("#profile-obs-2").html("")
		$("#profile-obs-3").html("")
			console.log(snap.val())
			let name = snap.val().info.name
			let phoneNumber = snap.val().info.phoneNumber
			let group = snap.val().info.group
			let user = snap.val().info.user
			let email = snap.val().info.email
			let password = snap.val().info.pass
			let rol = snap.val().info.rol
			let id = snap.val().info.id
			let code = snap.val().info.code


			setTimeout(function(){
				var obs_1 = Object.keys(snap.val().observations_1)
				obs_1.forEach(ob_1 => {
					var obs_1_html = `
								<tr>
									<td>
										${snap.val().observations_1[ob_1].teacherName}
									</td>
									<td>
										${snap.val().observations_1[ob_1].subject}
									</td>
									<td>
										${snap.val().observations_1[ob_1].content}
									</td>
									<td>
										${snap.val().observations_1[ob_1].date}
									</td>
								</tr>
							`
					$("#profile-obs-1").append(obs_1_html)
				})
			}, 300)
			setTimeout(function(){
				var obs_2 = Object.keys(snap.val().observations_2)
				obs_2.forEach(ob_2 => {
					var obs_2_html = `
								<tr>
									<td>
										${snap.val().observations_2[ob_2].teacherName}
									</td>
									<td>
										${snap.val().observations_2[ob_2].subject}
									</td>
									<td>
										${snap.val().observations_2[ob_2].content}
									</td>
									<td>
										${snap.val().observations_2[ob_2].date}
									</td>
								</tr>
							`
					$("#profile-obs-2").append(obs_2_html)
				})
			}, 400)
			setTimeout(function(){
				var obs_3 = Object.keys(snap.val().observations_3)
				obs_3.forEach(ob_3 => {
					var obs_3_html = `
								<tr>
									<td>
										${snap.val().observations_3[ob_3].teacherName}
									</td>
									<td>
										${snap.val().observations_3[ob_3].subject}
									</td>
									<td>
										${snap.val().observations_3[ob_3].content}
									</td>
									<td>
										${snap.val().observations_3[ob_3].date}
									</td>
								</tr>
							`

					$("#profile-obs-3").append(obs_3_html)
				})
			}, 450)

			//Put info into the modal

			$("#modal-profile #profile-user-name").text(user)
			var profileHtml = `
							<h4 id="profile-user-name">${user}</h4>
							<li>${name}</li>
							<li>${group}</li>
							<li>${email}</li>
							<li>${code}</li>
							<li>${rol}</li>
							<li>${id}</li>
							<li>${phoneNumber}</li>
							`

			$("#modal-profile .modal-user-content").html(profileHtml)



		})
	}

	function exportProfileToExcel(){
		$("#modal-profile table").table2excel({
			exclude: ".noExl",
      		name: "Results"
		})
	}
	function exportGrades_1(){
		$("#modal-profile .grades-1").table2excel({
			exclude: ".noExl",
			name: "Notas 1"
		})
	}
	function exportGrades_2(){
		$("#modal-profile .grades-2").table2excel({
			exclude: ".noExl",
			name: "Notas 2"
		})
	}
	function exportGrades_3(){
		$("#modal-profile .grades-3").table2excel({
			exclude: ".noExl",
			name: "Notas 3"
		})
	}


