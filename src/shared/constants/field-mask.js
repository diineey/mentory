export const FIELD_MASK_PREFIX = { phone: '+998', };

export const FIELD_MASK = {
  phone: { mask: `${FIELD_MASK_PREFIX.phone} ## ### ## ##`, },
  date: { mask: '##.##.####', },
};
