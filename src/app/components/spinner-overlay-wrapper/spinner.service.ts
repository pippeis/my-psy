import {Injectable} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {SpinnerOverlayWrapperComponent} from '@app/components/spinner-overlay-wrapper/spinner-overlay-wrapper.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) {
  }

  public show(message = '') {
    // Returns an OverlayRef (which is a PortalHost)

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    // Create ComponentPortal that can be attached to a PortalHost
    const spinnerPortal = new ComponentPortal(SpinnerOverlayWrapperComponent);
    const component = this.overlayRef.attach(spinnerPortal); // Attach ComponentPortal to PortalHost
    component.instance.message = message;
  }

  public hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
