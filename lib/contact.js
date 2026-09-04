// Coordonnées de contact centralisées (importables côté serveur ET client).

export const EMAIL = 'repmind@gmail.com';

export const PHONE_DISPLAY = '+33 6 08 17 76 43';
export const PHONE_HREF = 'tel:+33608177643';

// Lien de discussion directe WhatsApp (click-to-chat).
// Pour un lien d'invitation de groupe, remplacer par https://chat.whatsapp.com/XXXXXXXX
export const WHATSAPP_HREF = 'https://wa.me/33608177643';

export const ADDRESS_LINES = ['15 rue Stéphane Coignet', '69008 Lyon'];
export const ADDRESS_INLINE = '15 rue Stéphane Coignet, 69008 Lyon';
export const MAPS_HREF =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('15 rue Stéphane Coignet 69008 Lyon');

// E-mail pré-rempli : ouvert au clic sur « Décrivez votre besoin / Contactez-nous ».
const MAIL_SUBJECT = 'Description de mon besoin de formation';
const MAIL_BODY = `Bonjour,

Je souhaite décrire mon besoin de formation :

- Organisation :
- Public concerné :
- Thématique(s) :
- Nombre de participants :
- Échéance souhaitée :

Merci de me recontacter.`;

export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  MAIL_SUBJECT
)}&body=${encodeURIComponent(MAIL_BODY)}`;
