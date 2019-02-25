import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { News } from '../../news';
import { NewsService } from '../../news.service';
import { NewsDialogComponent } from '../newsdialog/newsdialog.component';
import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({
  selector: 'news-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: [
    './thumbnail.component.css'
    ]
})
export class ThumbnailComponent implements OnInit {

  @Input()
  news: News;
  @Input()
  useWatchlistApi:boolean;
  @Output()
  addNews=new EventEmitter();
  @Output()
  deleteNews=new EventEmitter();
  jwtToken:string;
  isUpdateButtonVisibile:boolean;
  isDeleteButtobVisible:boolean;
  
  constructor(private snackBar : MatSnackBar, private dialog : MatDialog,private authService:AuthenticationService) {   
    this.jwtToken=this.authService.gettokenVal();
    console.log('Inside thumbnail component ts constructor jwtdata is:',this.jwtToken);
    var jwtData=this.jwtToken.split('.')[1];
    console.log('jwtdata is:',jwtData);
    var decodedjwtJSONData=window.atob(jwtData);
    console.log('decodedjwtJSONData is',decodedjwtJSONData);
    var decodedJWTData=JSON.parse(decodedjwtJSONData);
    console.log('decodedJWTData is',decodedJWTData);
    var jwtTokenSub=decodedJWTData.sub;
    console.log('Now the Token sub value is:',jwtTokenSub);
    var userRole=jwtTokenSub.split(':')[1];
    console.log('Currently Loggined Users Role:',userRole);
    if(userRole=='RegUser'){
      this.isDeleteButtobVisible=true;
      this.isUpdateButtonVisibile=false;
    }else{
      this.isDeleteButtobVisible=true;
      this.isUpdateButtonVisibile=true;
    }
  }
  ngOnInit() {     
  }
  //calling the parent add to watch list component i.e the container component
  addToWatchList(){
      this.addNews.emit(this.news);
  }
  //calling the parent delete from watch list component i.e the container component
  deleteFromWatchList(){
    this.deleteNews.emit(this.news);
  }
  //calling the parent update watch list component i.e the container component
  updateFromWatchList(actionType)
  {
    let dialogRef = this.dialog.open(NewsDialogComponent,{
      width : '400px',
      data : {obj : this.news, actionType : actionType}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
