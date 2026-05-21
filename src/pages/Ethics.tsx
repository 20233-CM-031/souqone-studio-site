import { LegalPage } from './LegalPage';

export function Ethics() {
  return (
    <LegalPage
      eyebrow="Ethical commerce"
      title="Ethical Commerce Statement"
      intro="SouqOne Studio exists to help local businesses grow without compromising truth. Our work is guided by the principle that digital presentation should improve clarity and professionalism, not deceive customers."
      sections={[
        {
          title: 'Enhance presentation, not product reality',
          body: 'We improve background, lighting, sharpness, framing, and catalog layout without turning the product into something else.',
        },
        {
          title: 'No false claims',
          body: 'We do not support false material, quality, size, stone, or design claims.',
        },
        {
          title: 'Seller review is required',
          body: 'Sellers must review and approve final images before customer use.',
        },
        {
          title: 'Clear product details',
          body: 'We encourage clear product details, fair pricing, and honest communication.',
        },
        {
          title: 'Careful AI-styled visuals',
          body: 'AI-styled visuals should not mislead buyers about the actual product.',
        },
        {
          title: 'Trust and barakah',
          body: 'Trust and barakah are more important than short-term sales. SouqOne Studio is an early step toward practical, halal, and truthful digital commerce for local markets.',
        },
      ]}
    />
  );
}
