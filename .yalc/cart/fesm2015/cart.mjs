import * as i0 from '@angular/core';
import { Injectable, InjectionToken, Optional, SkipSelf, NgModule, Inject } from '@angular/core';

class CartService {
    constructor() {
        this.products = [];
    }
    add(product) {
        this.products.push(product);
    }
    remove(id) {
        this.products = this.products.filter((product) => product.id !== id);
    }
    count() {
        return this.products.length;
    }
    clear() {
        this.products = [];
    }
}
CartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

var Gender;
(function (Gender) {
    Gender["Men"] = "men";
    Gender["Women"] = "women";
})(Gender || (Gender = {}));

const CART_FORROOT_GUARD = new InjectionToken('CART FORROOT GUARD');

function cartForRootGuard(cartService) {
    return !!cartService;
}
class CartModule {
    constructor(isAlreadyLoaded) {
        if (isAlreadyLoaded) {
            throw new TypeError(`*** CartModule.forRoot() called twice. Lazy loaded modules should use CartModule.forChild() instead. ***`);
        }
    }
    static forRoot() {
        return {
            ngModule: CartModule,
            providers: [
                CartService,
                {
                    provide: CART_FORROOT_GUARD,
                    useFactory: cartForRootGuard,
                    deps: [[CartService, new Optional(), new SkipSelf()]],
                },
            ],
        };
    }
    static forChild() {
        return {
            ngModule: CartModule,
        };
    }
}
CartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartModule, deps: [{ token: CART_FORROOT_GUARD, optional: true }], target: i0.ɵɵFactoryTarget.NgModule });
CartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.1", ngImport: i0, type: CartModule });
CartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartModule, providers: [CartService] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: CartModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [CartService],
                }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Optional
                    }, {
                        type: Inject,
                        args: [CART_FORROOT_GUARD]
                    }] }];
    } });

/**
 * Generated bundle index. Do not edit.
 */

export { CartModule, CartService, Gender, cartForRootGuard };
//# sourceMappingURL=cart.mjs.map
