import { Component, OnInit } from '@angular/core';
import { DatabaseSyncStatus } from '../../database/database-sync-status.enum';
import { SessionService } from '../session.service';
import { DatabaseManagerService } from '../../database/database-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInProgress = false;
  username: string;
  password: string;
  errorMessage: string;

  private retryLoginSubscription: any;
  private isRetriedLogin = false;
  private _lastPassword: string;


  constructor(private _sessionService: SessionService,
              private _dbManager: DatabaseManagerService) {
  }


  ngOnInit(): void {
  }

  login() {
    this.loginInProgress = true;

    this._sessionService.login(this.username, this.password)
      .then(success => success ? this.onLoginSuccess() : this.onLoginFailure('username or password incorrect'))
      .catch(reason => this.onLoginFailure(reason));
  }

  private onLoginSuccess() {
    this.reset();
    // login component is automatically hidden based on _sessionService.isLoggedIn()

    //TODO: show progress of downloading database (if necessary)
    //TODO: call service to check and warn about outdated database
    //TODO: call service to check version and display changelog of updates
  }

  private onLoginFailure(reason: any) {
    if (!this.isRetriedLogin) {
      this._lastPassword = this.password;
      this.retryLoginAfterSync();
    }

    this.reset();
    this.errorMessage = reason;
  }


  private reset() {
    this.errorMessage = '';
    this.password = '';
    this.loginInProgress = false;
    this.isRetriedLogin = false;
  }


  private retryLoginAfterSync() {
    this.isRetriedLogin = true;

    let self = this;
    this.retryLoginSubscription = this._dbManager.onSyncStatusChanged.subscribe(
      function (syncStatus: DatabaseSyncStatus) {
        if (syncStatus === DatabaseSyncStatus.completed) {
          self.password = self._lastPassword;
          self.login();
          self.retryLoginSubscription.unsubscribe();
        } else if (syncStatus === DatabaseSyncStatus.failed) {
          self.retryLoginSubscription.unsubscribe();
        }
      }
    );
  }
}
