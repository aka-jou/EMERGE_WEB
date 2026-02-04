import emailjs from '@emailjs/browser';

// 🔧 Configura estos valores con los que obtuviste de EmailJS
const EMAIL_CONFIG = {
  serviceId: 'service_xxxxxxx',        // 👈 Reemplaza con tu Service ID
  templateId: 'template_xxxxxxx',      // 👈 Reemplaza con tu Template ID
  publicKey: 'aBcDeFgHiJkLmNoPq',      // 👈 Reemplaza con tu Public Key
};

export interface QuoteRequest {
  productName: string;
  productModel: string;
  productSku: string;
  quantity: number;
  price: string | null;
  category: string;
}

export const sendQuoteEmail = async (quoteData: QuoteRequest): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'antonio.ruiz@grupoemerge.com.mx', // 📧 Email de destino
      product_name: quoteData.productName,
      product_model: quoteData.productModel,
      product_sku: quoteData.productSku,
      quantity: quoteData.quantity,
      price: quoteData.price || 'A consultar',
      category: quoteData.category,
      request_date: new Date().toLocaleString('es-MX', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'America/Mexico_City',
      }),
    };

    console.log('📧 Enviando cotización a antonio.ruiz@grupoemerge.com.mx');
    console.log('📦 Datos:', templateParams);

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    console.log('✅ Email enviado exitosamente:', response);
    return true;
  } catch (error) {
    console.error('❌ Error al enviar email:', error);
    return false;
  }
};
