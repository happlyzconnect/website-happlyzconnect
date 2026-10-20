// Utilitaires de la rubrique « Conseils »
export function readingTime(body: string): number {
  const words = body.replace(/[#|*_`>\-[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 220));
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' });
}
