export const REQUIRED_KEYS = [
    "fw_status",
    "wk_expm1_builtin", "wk_JSFunction_m_function",
    "wk_POP_RDI_RET", "wk_POP_RSI_RET", "wk_POP_RDX_RET", "wk_POP_RCX_RET",
    "wk_POP_RAX_RET", "wk_POP_R8_RET", "wk_POP_R9_RET", "wk_LEAVE_RET",
    "wk_MOV_QWORD_PTR_RDI_RAX_RET",
    "wk_MOV_RDI_RSI_30_CALL", "wk_POP_RAX_MOV_RAX_JMP_18",
    "wk_PUSH_RBP_MOV_RBP_RSP_10", "wk_MOV_RDI_RAX_8_CALL_20",
    "wk_MOV_RDX_RAX_18_CALL_10", "wk_PUSH_RDX_POP_RSP_RET",
    "pivot_view_sp", "wk_ArrayBuffer_m_impl", "wk_ArrayBuffer_m_contents_m_data",
    "wk___imp___error", "k__error",
    "k_scan_stage1", "k_scan_stage2",
    "k_evf_cv", "k_sysent_661", "k_jmp_rsi",
];
export const OPTIONAL_KEYS = [
    "k_stubs", "wk___imp_pthread_create", "k_pthread_create",
    "kpatch", "alias_of",
];

const OFF_1202 = {
    fw_status: "12.02 lapse kpatch=1200.bin",
    kpatch: "1200.bin",

    wk_expm1_builtin:                   0x2585090,
    wk_JSFunction_m_function:           0x28,

    wk_POP_RDI_RET:                     0x4902f,
    wk_POP_RSI_RET:                     0x10e37,
    wk_POP_RDX_RET:                     0xf7a,
    wk_POP_RCX_RET:                     0x53c0b,
    wk_POP_RAX_RET:                     0x22f53,
    wk_POP_R8_RET:                      0x22f52,
    wk_POP_R9_RET:                      0x60b6c1,
    wk_LEAVE_RET:                       0x11823,
    wk_MOV_QWORD_PTR_RDI_RAX_RET:       0x2b5cb,
    wk_PUSH_RDX_POP_RSP_RET:            0x2abb03a,
    wk_MOV_RDI_RSI_30_CALL:             0x295dcd8,
    wk_POP_RAX_MOV_RAX_JMP_18:          0x8e4873,
    wk_PUSH_RBP_MOV_RBP_RSP_10:         0x285e10,
    wk_MOV_RDI_RAX_8_CALL_20:           0x6c7b0d,
    wk_MOV_RDX_RAX_18_CALL_10:          0xd37cca,

    pivot_view_sp:                      0x38,
    wk_ArrayBuffer_m_impl:              0x10,
    wk_ArrayBuffer_m_contents_m_data:   0x10,

    wk___imp___error:                   0x3cbcc48,
    k__error:                           0x299c0,
    wk___imp_pthread_create:            0x3cbdb80,
    k_pthread_create:                   0x24e00,

    k_stubs: {
        3: 0x2c160,
        4: 0x2b8c0,
        5: 0x2b960,
        6: 0x2d610,
        20: 0x2cb60,
        23: 0x2b6e0,
        24: 0x2d5d0,
        25: 0x2b4c0,
        30: 0x2c9c0,
        54: 0x2cfe0,
        92: 0x2b640,
        97: 0x2d040,
        98: 0x2b5e0,
        104: 0x2d370,
        105: 0x2b480,
        106: 0x2d470,
        118: 0x2b2e0,
        135: 0x2c270,
        240: 0x2d4b0,
        331: 0x2c6a0,
        432: 0x2b500,
        466: 0x2cc60,
        487: 0x2ba70,
        488: 0x2bd00,
        538: 0x2b420,
        539: 0x2b4e0,
        544: 0x2bea0,
        545: 0x2ca20,
        632: 0x2d080,
        633: 0x2d830,
        662: 0x2cca0,
        663: 0x2c3d0,
        664: 0x2d730,
        666: 0x2d530,
        669: 0x2bde0,
    },
    k_scan_stage1:                      0x40000,
    k_scan_stage2:                      0x60000,

    k_evf_cv:                           0x784798,
    k_sysent_661:                       0x110a760,
    k_jmp_rsi:                          0x47b31,
};

export const PS4 = {
    "12.02": OFF_1202,
    "12.00": Object.assign({}, OFF_1202, {
        alias_of: "12.02",
        fw_status: "12.00 shares 12.02 / 1200.bin",
    }),
};

export function offsetsFor(uaString) {
    const m = (uaString || "").match(/PlayStation\s+4[\/ ](\d+)\.(\d+)/);
    if (!m) return { key: null, off: null };

    const key = m[1] + "." + parseInt(m[2], 16).toString(16).padStart(2, "0");
    return { key, off: PS4[key] || null };
}
