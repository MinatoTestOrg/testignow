package com.minatogithuborganization.testignow.controller;

import com.vs.rappit.base.factory.InstanceFactory;
import com.minatogithuborganization.testignow.service.AttachmentServiceImpl;
import com.minatogithuborganization.testignow.base.controller.AttachmentBaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
@RestController
@RequestMapping(path = "/rest/attachments/", produces = "application/json")
public class AttachmentController extends AttachmentBaseController<AttachmentServiceImpl> {
	public AttachmentController(AttachmentServiceImpl attachmentService) {
		super(attachmentService);
    }
}
