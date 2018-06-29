import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppService} from './app.service';
import * as $ from 'jquery';
import {Details} from './app.interface';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    datajson: Details[];
    datajsonsave: any[];
    public isHidden: boolean = false;
    public isHiddenedit: boolean = false;
    public formhide: boolean = false;
    public buttonhide: boolean = true;
    public tabledatahide: boolean = true;
    public loginhide: boolean = true;
    public nextpage: boolean = true;
    detail: Details;
    public filename: any;


    public files: UploadFile[] = [];
    public positionidvar: string = '';
    public effectivedatevar: string = '';
    public statusvar: string = '';
    public legalentityvar: string = '';
    public bussinessunitvar: string = '';
    public lobsegmentvar: string = '';
    public verticalvar: string = '';
    public subvertivalvar: string = '';
    public costcentervar: string = '';
    public Geozonevar: string = '';
    public facilityvar: string = '';
    public employeeclassvar: string = '';
    public employeetypevar: string = '';
    public jobfamilyvar: string = '';
    public Jobcodevar: string = '';
    public internalspecilizationvar: string = '';
    public variablepaytypevar: string = '';
    public reportingmanagervar: string = '';
    public buhrspocvar: string = '';


    constructor(
        private httpClient: HttpClient,
        private http: Http,
        private appservice: AppService
    ) {
    }


    ngOnInit() {
        this.appservice.getdata()
            .subscribe((informationjson) => {
                this.datajson = informationjson;
                this.datajsonsave = informationjson;
                //console.log(this.datajson);
            });

        document.getElementById('positionreq').style.display = 'none';
        document.getElementById('effectivedatereq').style.display = 'none';
        document.getElementById('statusreq').style.display = 'none';
    }


    shownextpage() {
        this.loginhide = true;
        this.nextpage = false;
    }

    exportToExcel() {

        this.appservice.exportAsExcelFile(this.datajsonsave, 'newexcel');
    }


    handelSubmit(event: Details) {
        /* var a = $("#le").val();
   var b = $("#bu").val();
   console.log(a);
   console.log(b);
   if(a && b)
   {
      alert("Kindly Tick The Position Admin Approval CheckBox");




   }


   else
   {*/

        this.httpClient.post('http://localhost:3600/Data', event)
            .subscribe(() => this.appservice.getdata()
                .subscribe((informationjson) => {
                    this.datajson = informationjson;
                    //console.log(this.datajson);
                }));
        /* this.httpClient.post('http://localhost:3600/Data',event1)
             .subscribe()
         this.httpClient.post('http://localhost:3600/Data',event2)
             .subscribe()
         this.httpClient.post('http://localhost:3600/Data',event3)
             .subscribe()
         this.httpClient.post('http://localhost:3600/Data',event4)
             .subscribe()
         this.httpClient.post('http://localhost:3600/Data',event5)
             .subscribe()*/


        if (this.datajson.length >= 9) {

            this.formhide = true;
            this.loginhide = false;
        }


        console.log('qwerty');
        //this.formhide=true;/
        this.buttonhide = false;

        /* this.positionidvar=null;
         this.effectivedatevar=null;
         this.statusvar= null;
         this.legalentityvar= null;
         this.bussinessunitvar= null;
         this.lobsegmentvar=null ;
         this.verticalvar= null;
         this.subvertivalvar= null;
         this.costcentervar= null;
         this.Geozonevar= null;
         this.facilityvar= null;
         this.employeeclassvar= null;
         this.employeetypevar= null;
         this.jobfamilyvar= null;
         this.Jobcodevar= null;
         this.internalspecilizationvar= null;
         this.variablepaytypevar= null;
         this.reportingmanagervar= null;
         this.buhrspocvar= null;*/
    }


    fileEvent(Event) {
        let file = Event.target.files[0];
        this.filename = file.name;
    }


    addform() {
        //this.formhide=false;
        this.buttonhide = true;


    }

    onedit(event) {

        this.positionidvar = event.positionid;
        this.effectivedatevar = event.effectivedate;
        this.statusvar = event.status;
        this.legalentityvar = event.legalentity;
        this.bussinessunitvar = event.bussinessunit;
        this.lobsegmentvar = event.lobsegment;
        this.verticalvar = event.vertical;
        this.subvertivalvar = event.subvertival;
        this.costcentervar = event.costcenter;
        this.Geozonevar = event.Geozone;
        this.facilityvar = event.facility;
        this.employeeclassvar = event.employeeclass;
        this.employeetypevar = event.employeetype;
        this.jobfamilyvar = event.jobfamily;
        this.Jobcodevar = event.Jobcode;
        this.internalspecilizationvar = event.internalspecilization;
        this.variablepaytypevar = event.variablepaytype;
        this.reportingmanagervar = event.reportingmanager;
        this.buhrspocvar = event.buhrspoc;

    }


    /**$(document).ready(function(){
  $('#form input').change(function () {
    $('#form p').text(this.files.length + " file(s) selected");
    alert(this.files[0]);
    $('#form fname').innerHTML(this.files[0] + " file(s) selected");
  });
});
     /**$(document).ready(function() {

  $('#openBtn').click(function() {
    $('#myModal').modal({
      show: true
    })
  });

  $(document).on({
    'show.bs.modal': function() {
      var zIndex = 1040 + (10 * $('.modal:visible').length);
      $(this).css('z-index', zIndex);
      setTimeout(function() {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
      }, 0);
    },
    'hidden.bs.modal': function() {
      if ($('.modal:visible').length > 0) {
        // restore the modal-open class to the body element, so that scrolling works
        // properly after de-stacking a modal.
        setTimeout(function() {
          $(document.body).addClass('modal-open');
        }, 0);
      }
    }
  }, '.modal');
});
     **/

    extra(e) {
        // var a = document.getElementById("compulsarytocheck");
        //var b = document.getElementById("bu");

        if (e.target.checked) {
            //document.getElementById("choose").style.display= "block";
            document.getElementById('choose1').style.display = 'block';

        }
        else {
            document.getElementById('choose1').style.display = 'none';
        }

    }

    nomore() {
        document.getElementById('ad').style.display = 'block';


    }

    next() {
        var a = $('#statusid').val();
        var b = $('#positionidid').val();
        var c = $('#effectiveid').val();


        if ((a == '')) {
            document.getElementById('positionreq').style.display = 'block';

        }
        
        if ((b == '')) {
            document.getElementById('effectivedatereq').style.display = 'block';

        }
        if ((c == '')) {
            document.getElementById('statusreq').style.display = 'block';

        }


    }

    next1() {
        var a = $('#legalentityid').val();
        var b = $('#bussinessunitid').val();
        var c = $('#lobsegmentid').val();
        var d = $('#verticalid').val();
        var e = $('#subverticalid').val();
        var f = $('#costcenterid').val();

        if ((a == '') || (b == '') || (c == '') || (d == '')|| (e == '') || (f == '')) {
            alert('Field required');
        }

    }

    next2() {
        var a = $('#Geozoneid').val();
        var b = $('#facilityid').val();


        if ((a == '') || (b == '')) {
            alert('Field required');
        }

    }

    next3() {
        var a = $('#employeeclassid').val();
        var b = $('#employeetypeid').val();


        if ((a == '') || (b == '')) {
            alert('Field required');
        }

    }

    next4() {
        var a = $('#jobfamilyid').val();
        var b = $('#Jobcodeid').val();
        var c = $('#internalspecilizationid').val();
        var d = $('#variablepaytypeid').val();

        if ((a == '') || (b == '') || (c == '') || (d == '')) {
            alert('Field required');
        }

    }

    next5() {
        var a = $('#reportingmanagerid').val();
        var b = $('#buhrspocid').val();


        if ((a == '') || (b == '')) {
            alert('Field required');
        }

    }

    display() {
        this.isHiddenedit = true;
    }


    ecode() {

        $('.ecode2').css('display', 'flex');
        $('#email').val('arpitkalra0003@gmail.com');
    }


    hideme() {

        $('.accordion').css('display', 'none');

    }

    showme() {
        $('.accordion').css('display', 'block');


    }


    /* *public dropped(event: UploadEvent) {
         this.tabledatahide=false;
         this.files = event.files;
         for (const droppedFile of event.files) {

             // Is it a file?
             if (droppedFile.fileEntry.isFile) {
                 const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                 fileEntry.file((file: File) => {

                     // Here you can access the real file
                     console.log(droppedFile.relativePath, file);

                     /**
                      // You could upload it like this:
                      const formData = new FormData()
                      formData.append('logo', file, relativePath)

                      // Headers
                      const headers = new HttpHeaders({
             'security-token': 'mytoken'
           })

                      this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
                      .subscribe(data => {
             // Sanitized logo returned from backend
           })


                 });
             } else {
                 // It was a directory (empty directories are added, otherwise only files)
                 const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                 console.log(droppedFile.relativePath, fileEntry);
             }
         }
     }

     public fileOver(event){
         console.log(event);
     }

     public fileLeave(event){
         console.log(event);
     }
 **/

    public makeDroppable(element, callback) {

        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        //input.setAttribute('multiple', true);
        input.style.display = 'none';

        input.addEventListener('change', triggerCallback);
        element.appendChild(input);

        element.addEventListener('dragover', function (e) {
            e.preventDefault();
            e.stopPropagation();
            element.classList.add('dragover');
        });

        element.addEventListener('dragleave', function (e) {
            e.preventDefault();
            e.stopPropagation();
            element.classList.remove('dragover');
        });

        element.addEventListener('drop', function (e) {
            e.preventDefault();
            e.stopPropagation();
            element.classList.remove('dragover');
            triggerCallback(e);
        });

        element.addEventListener('click', function () {
            input.value = null;
            input.click();
        });

        function triggerCallback(e) {
            var files;
            if (e.dataTransfer) {
                files = e.dataTransfer.files;
            } else if (e.target) {
                files = e.target.files;
            }
            callback.call(null, files);
        }
    }


}
 

