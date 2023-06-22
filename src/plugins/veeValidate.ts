import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'pole je povinné',
});

extend('email', {
  ...email,
  message: 'není platný email',
});

/* password validations */

// extend('incLetters', {
//   validate(value: string) {
//     return Boolean(value.match('[a-z]')) && Boolean(value.match('[A-Z]'));
//   },
//   message: 'Obsahuje jak malá písmena (a-z), tak velká (A-Z)',
// });

// extend('incNumber', {
//   validate(value: string) {
//     return Boolean(value.match(`\\d`));
//   },
//   message: 'Obsahuje alespoň jednu číslici (0-9)'
// });

// extend('notMail', {
//   validate(value: string, args: any) {
//     return Boolean(value.match(args.email));
//   },
//   message: 'Neobsahuje vaši e-mailovou adresu',
//   params: ['email'],
// });

// extend('min', {
//   validate(value: string, args: any) {
//     return value.length > args.min;
//   },
//   message: 'Obsahuje alespoň {min} znaků',
//   params: ['min'],
// });
