/* eslint-disable @typescript-eslint/no-namespace */
export namespace Users {
  export enum Roles {
    USER = 0,
    ADMIN = 100,
    ROOT = 1000,
  }

  export enum Group {
    QA = 'qa',
    FRONT = 'front',
    BACK = 'back',
    FULL = 'full',
  }

  export enum Tiers {
    GUEST = 'guest',
    COMMON = 'common',
  }

  export enum TwoFactorAction {
    SIGN_IN = 'sign-in',
    REGISTER = 'register',
    FORGOT_PASSWORD = 'forgot-password',
    CONFIRM_ACTION = 'confirm-action',
  }

  export enum Gender {
    MALE = 'M',
    FEMALE = 'F',
    UNKNOWN = 'U',
  }

  export interface User {
    email: string;
    name: string;
    mobile?: string;
    role: Roles;
    group: Group;
    password: string;
    tier: Tiers;
  }

  export enum UserInfoKycSteps {
    NOT_STARTED = 'not-started',
    MAIN_DOCUMENT = 'main-document-validated',
    FACE_MATCH = 'face-match-validated',
    ADDRESS = 'address-validated',
    FINANCIAL_CAPACITY = 'financial-capacity-validated',
  }

  export interface Info {
    user: User;
    gender?: Gender;
    birthday?: string;
    mainDocument?: string;
    address?: Address;
    nationality?: string;
    motherName?: string;
    company?: {
      fantasy: string;
      country: string;
      district: string;
      regime: string;
      isSimple: boolean;
      IsHeadquarter: boolean;
    };
    files?: [string];
    kycCurrentStep: UserInfoKycSteps;
  }

  export interface Address {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    district: string;
    zipCode: string;
    country: string;
    AddressCurrentlyInRFSite: boolean;
    IsMainForEntity: boolean;
  }
}
